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

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.library.temas.Tema;





public class ProyeccionData {

	

	private long id = -1;


	private String title;

	private String description;
	
	private String image;
	

	private String tipo;
	
	
	public ProyeccionData() {}

	public ProyeccionData(String nombre, String description,String image,String tipo) {
		super();
		this.title = nombre;
		this.description = description;
		this.image=image;
		this.tipo=tipo;
	}


	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}


}
