package es.urjc.code.daw.library.actores;

import java.util.Collection;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/actores")
public class ActorController {
	public static final Logger log = LoggerFactory.getLogger(ActorController.class);
	
	@Autowired
	private ActorRepository repositorio;
	
	@PostConstruct
	 public void init() {
		String[] a = {"Driver","Solo dios perdona"};
		repositorio.save(new Actor("Ryan Gosling", "Protagonista de Driver", "Angular2/TvList/src/client/assets/images/rg.jpg", a));
		repositorio.save(new Actor("Harrison Ford", "Actor veterano que ha realizado muchos papeles famosos, como Indiana Jones o Han Solo", "Angular2/TvList/src/client/assets/images/hs.jpg", a));
	 }
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Actor> getActores() {
		return repositorio.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Actor> getActor(@PathVariable long id) {
		log.info("Get Actor{}", id);
		Actor actor = this.repositorio.findOne(id);
		
		if (actor != null) {
			return new ResponseEntity<>(actor, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Actor nuevoActor(@RequestBody Actor actor) {
		this.repositorio.save(actor);
		return actor;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Actor> ActualizarActor(@PathVariable long id, Actor ActorActualizado) {
		Actor actor = repositorio.findOne(id);
		if (actor != null) {
			ActorActualizado.setId(id);
			repositorio.save(ActorActualizado);
			return new ResponseEntity<>(ActorActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Actor> borrarActor(@PathVariable String id) {
		long IdNumero = Long.valueOf(id).longValue();
		if (repositorio.exists(IdNumero)) {
			repositorio.delete(IdNumero);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}