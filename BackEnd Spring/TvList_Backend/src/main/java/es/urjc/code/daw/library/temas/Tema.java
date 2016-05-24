package es.urjc.code.daw.library.temas;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import es.urjc.code.daw.library.proyecciones.Proyeccion;


@Entity
public class Tema {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String tema;
	
	@ManyToMany(mappedBy="temas")
	private List<Proyeccion> peliculas= new ArrayList<>();
	
	public Tema() {}

	public Tema(String tema) {
		super();
		this.tema = tema;
	}

	public String getTema() {
		return tema;
	}

	public long getId() {
		return id;
	}
	
	public void setTema(String tema) {
		this.tema = tema;
	}
	
	public List<Proyeccion> getPeliculas() {
		return peliculas;
	}

	public void setPeliculas(List<Proyeccion> peliculas) {
		this.peliculas = peliculas;
	}

}
