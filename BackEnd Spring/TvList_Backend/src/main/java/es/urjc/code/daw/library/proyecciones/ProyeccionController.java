package es.urjc.code.daw.library.proyecciones;

import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.temas.Tema;
import es.urjc.code.daw.library.temas.TemaRepository;

@RestController
@RequestMapping("/peliculas")
public class ProyeccionController {

	private static final Logger log = LoggerFactory.getLogger(ProyeccionController.class);

	@Autowired
	private ProyeccionRepository repositoryProye;
	
	@Autowired
	private TemaRepository repositoryTema;

	@JsonView(Proyeccion.Basico.class)
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Proyeccion> getProyeccionesByType(@RequestParam(value="page", required=false) Integer page, @RequestParam(value="title", required=false) String name , @RequestParam(value="genre", required=false) String tema) {
		if (page==null)
			page=(Integer) 0;
		if (name==null || name.isEmpty())
			name="%";
		if (tema==null || tema.isEmpty())
		{
			Page pag= repositoryProye.findByTitleContainingIgnoreCase(name,new PageRequest(page, 2,new Sort(Direction.DESC,"id")));
			return pag.getContent();
		}
		else
		{
			Tema temaPeliculas = repositoryTema.findByTema(tema);
			Page pag= repositoryProye.findByTemas(temaPeliculas,name.toUpperCase(),new PageRequest(page, 2,new Sort(Direction.DESC,"id")));
			return pag.getContent();
		}
	}

	/*
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Proyeccion> getAnuncio(@PathVariable long id) {
/*
		log.info("Get book {}", id);

		Book anuncio = repository.findOne(id);
		if (anuncio != null) {
			return new ResponseEntity<>(anuncio, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		return null;
	}
*/
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Proyeccion nuevoAnuncio(@RequestBody Proyeccion anuncio) {
		/*
		repository.save(anuncio);

		return anuncio;
		*/	
		return null;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Proyeccion> actulizaAnuncio(@PathVariable long id, @RequestBody Proyeccion updatedBook) {
/*
		Book anuncio = repository.findOne(id);
		if (anuncio != null) {

			updatedBook.setId(id);
			repository.save(updatedBook);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		*/
		return null;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Proyeccion> borraAnuncio(@PathVariable long id) {
/*
		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		*/
		return null;
		
	}

}
