package es.urjc.code.daw.library.temas;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TemaRepository extends JpaRepository<Tema, Long> {
	
	Tema findByTema(String tema);

}