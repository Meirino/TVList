package es.urjc.code.daw.library.proyecciones;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.ws.rs.DELETE;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.temas.Tema;





public class Pagina {

	
	interface PaginaJson {}
	
	@JsonView(PaginaJson.class)
	public List<Proyeccion> contenido;
	
	@JsonView(PaginaJson.class)
	public int paginaActual;
	
	@JsonView(PaginaJson.class)
	public int paginaTotal;
	
	
	
	public Pagina(List<Proyeccion> contenido,int paginaActual,int paginaTotal){
		this.contenido=contenido;
		this.paginaActual=paginaActual;
		this.paginaTotal=paginaTotal;
	}

}
