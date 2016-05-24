package es.urjc.code.daw.library.proyecciones;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyeccion {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	private String title;
	
	@Column(length = 50000)
	private String description;
	
	private String image;

	public Proyeccion() {}

	public Proyeccion(String nombre, String description,String image) {
		super();
		this.title = nombre;
		this.description = description;
		this.image=image;
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

	public long getId() {
		return id;
	}

}
