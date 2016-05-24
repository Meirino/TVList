package es.urjc.code.daw.library.actores;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Actor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String nombre;
	@Column(length = 50000)
	private String descripcion;
	private String[] obras;
	private String IMG;
	
	public Actor() {}
	
	public Actor(String nombre, String descripcion, String IMG, String[] obras) {
		super();
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.obras = obras;
		this.IMG = IMG;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String[] getObras() {
		return obras;
	}

	public void setObras(String[] obras) {
		this.obras = obras;
	}

	public String getIMG() {
		return IMG;
	}

	public void setIMG(String iMG) {
		IMG = iMG;
	}

	public long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Actor [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", obras="
				+ Arrays.toString(obras) + ", IMG=" + IMG + "]";
	}

	public void setId(long id) {
		this.id = id;
	}
}
