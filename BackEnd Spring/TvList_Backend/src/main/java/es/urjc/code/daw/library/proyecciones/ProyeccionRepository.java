package es.urjc.code.daw.library.proyecciones;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.urjc.code.daw.library.temas.Tema;

public interface ProyeccionRepository extends JpaRepository<Proyeccion, Long> {

	@Query("From Proyeccion p where :tema member p.temas AND UPPER(p.title) like %:title%")
	Page<Proyeccion> findByTemas(@Param("tema") Tema tema,@Param("title") String title,Pageable pageable);
	
	Page<Proyeccion> findByTitleContainingIgnoreCase(String title,Pageable pageable);

}