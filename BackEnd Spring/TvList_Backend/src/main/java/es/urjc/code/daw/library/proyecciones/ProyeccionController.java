package es.urjc.code.daw.library.proyecciones;

import java.util.ArrayList;
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
import es.urjc.code.daw.library.user.User;

@RestController
@RequestMapping("/peliculas")
public class ProyeccionController {
	

	interface PaginaPeliculas extends Proyeccion.Basico, Pagina.PaginaJson {}
	private static final Logger log = LoggerFactory.getLogger(ProyeccionController.class);

	@Autowired
	private ProyeccionRepository repositoryProye;
	
	@Autowired
	private TemaRepository repositoryTema;

	
	@JsonView(PaginaPeliculas.class)
	@RequestMapping(value = "", method = RequestMethod.GET)
	public Pagina getProyeccionesByType(@RequestParam(value="page", required=false) Integer page, @RequestParam(value="title", required=false) String name , @RequestParam(value="genre", required=false) String tema) {
		if (page==null)
			page=(Integer) 0;
		if (name==null || name.isEmpty())
			name="%";
		if (tema==null || tema.isEmpty())
		{
			Page pag= repositoryProye.findByTitleContainingIgnoreCase(name,new PageRequest(page, 2,new Sort(Direction.DESC,"id")));
			return new Pagina(pag.getContent(),pag.getNumber(),pag.getTotalPages());
		}
		else
		{
			Tema temaPeliculas = repositoryTema.findByTema(tema);
			Page pag= repositoryProye.findByTemas(temaPeliculas,name.toUpperCase(),new PageRequest(page, 2,new Sort(Direction.DESC,"id")));
			return new Pagina(pag.getContent(),pag.getNumber(),pag.getTotalPages());
		}
	}
	
	@JsonView(Proyeccion.Basico.class)
	@RequestMapping(value = "", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Proyeccion addProyeccion(@RequestBody ProyeccionData pelicula) {
		String img="";
		if (pelicula.getImage()!=null)
			img=pelicula.getImage();
		Tema t=repositoryTema.findOne(Long.parseLong(pelicula.getTipo()));
		List <Tema> temas=new ArrayList<>();
		temas.add(t);
		Proyeccion peli = new Proyeccion(pelicula.getTitle(),pelicula.getDescription(),img,temas);
		repositoryProye.save(peli);
		return peli;
	}

	@JsonView(Proyeccion.Basico.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Proyeccion> getPeli(@PathVariable long id) {

		log.info("Get book {}", id);

		Proyeccion pelicula = repositoryProye.findOne(id);
		if (pelicula != null) {
			return new ResponseEntity<>(pelicula, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	


	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Proyeccion> actulizaPeli(@PathVariable long id, @RequestBody Proyeccion updatedBook) {
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

	@JsonView(Proyeccion.Basico.class)
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Proyeccion> eliminarPeli(@PathVariable long id) {

		Proyeccion pelicula = repositoryProye.findOne(id);
		if (pelicula != null) {
			pelicula.getTemas().clear();
			repositoryProye.delete(id);
			return new ResponseEntity<>(pelicula, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
