package es.urjc.code.daw.library.book;

import org.apache.tomcat.jni.Global;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.globalData.GlobalData;
import es.urjc.code.daw.library.globalData.GlobalDataRepository;
import es.urjc.code.daw.library.proyecciones.Proyeccion;
import es.urjc.code.daw.library.proyecciones.ProyeccionRepository;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private GlobalDataRepository globalRepository;
	
	@Autowired
	private ProyeccionRepository proyeRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample books

		bookRepository.save(new Book("SUEÑOS DE ACERO Y NEON",
				"Los personajes que protagonizan este relato sobreviven en una sociedad en decadencia a la que, no obstante, lograrán devolver la posibilidad de un futuro. Año 2484. En un mundo dominado por las grandes corporaciones, solo un hombre, Jordi Thompson, detective privado deslenguado y vividor, pero de gran talento y sentido d..."));
		bookRepository.save(new Book("LA VIDA SECRETA DE LA MENTE",
				"La vida secreta de la mentees un viaje especular que recorre el cerebro y el pensamiento: se trata de descubrir nuestra mente para entendernos hasta en los más pequeños rincones que componen lo que somos, cómo forjamos las ideas en los primeros días de vida, cómo damos forma a las decisiones que nos constituyen, cómo soñamos y cómo imaginamos, por qué sentimos ciertas emociones hacia los demás, cómo los demás influyen en nosotros, y cómo el cerebro se transforma y, con él, lo que somos."));
		bookRepository.save(new Book("CASI SIN QUERER",
				"El amor algunas veces es tan complicado como impredecible. Pero al final lo que más valoramos son los detalles más simples, los más bonitos, los que llegan sin avisar. Y a la hora de escribir sobre sentimientos, no hay nada más limpio que hacerlo desde el corazón. Y eso hace Defreds en este libro."));
		bookRepository.save(new Book("TERMINAMOS Y OTROS POEMAS SIN TERMINAR",
				"Recopilación de nuevos poemas, textos en prosa y pensamientos del autor. Un sabio dijo una vez: «Pocas cosas hipnotizan tanto en este mundo como una llama y como la luna, será porque no podemos cogerlas o porque nos iluminan en la penumbra». Realmente no sé si alguien dijo esta cita o me la acabo de inventar pero deberían de haberla escrito porque el poder hipnótico que ejercen esa mujer de rojo y esa dama blanca sobre el ser humano es digna de estudio."));
		bookRepository.save(new Book("LA LEGIÓN PERDIDA",
				"En el año 53 a. C. el cónsul Craso cruzó el Éufrates para conquistar Oriente, pero su ejército fue destrozado en Carrhae. Una legión entera cayó prisionera de los partos. Nadie sabe a ciencia cierta qué pasó con aquella legión perdida.150 años después, Trajano está a punto de volver a cruzar el Éufrates. ..."));

		// Sample users

		userRepository.save(new User("admin", "pass", "admin@TvList.com",true,"Paquito","El Chocolatero","avatar1.png","ROLE_USER", "ROLE_ADMIN"));
		userRepository.save(new User("david", "pass","david@gmail.com",false,"David","Martinez","avatar2.jpg", "ROLE_USER"));
		userRepository.save(new User("juan", "pass","juan@outlook.com",false,"Juan","No se","avatar3.png", "ROLE_USER"));
	
		
		proyeRepository.save(new Proyeccion("DeadPool","Sobre la base de la mayoría no convencional anti-héroe de Marvel Comics, Deadpool dice la historia del origen del ex Fuerzas Especiales operativa mercenario convertido Wade Wilson, que después de haber sido sometido a un experimento de la picaresca que lo deja con poderes curativos acelerado, adopta el alter ego Deadpool. Armado con sus nuevas habilidades y un sentido oscuro, torcido del humor, Deadpool persigue el hombre que casi destruyó su vida.","portada2.jpeg"));
		proyeRepository.save(new Proyeccion("Angry Birds, La Película","El rey Pig y toda la piara malvada ha planeado una meticulosa estrategia para conseguir los huevos tan preciados de los pájaros enfadados. Cuando los plumíferos con malas pulgas descubren que han sido robados por su enemigo más despiadado, deciden contraatacar con un arriesgado plan en el que tendrán que luchar y dar lo mejor de sus increíbles capacidades para salir victoriosos. Angry Birds está basada en el videojuego con el mismo nombre de animación para móviles, protagonizado por los tres famosos pájaros enfadados y unos cerdos ladrones de huevos. El juego fue creado por la empresa finlandesa Rovio Mobile en el año 2009 y debido al éxito cosechado, Rovio y Sony decidieron producir la película conjuntamente.","portada3.jpg"));
		proyeRepository.save(new Proyeccion("El Cazador y la Reina del Hielo","El argumento de 'La Leyenda del Cazador' nos sitúa en la búsqueda del espejo mágico. Con el cazador (Chris Hemswoth) en su búsqueda, algo que le obligará a enfrenarse con su pasado y con la malvada Reina de las Nieves (interpretada por Emily Blunt), que desea venganza por su hermana Ravenna (Charlize Theron).","portada4.jpg"));
		proyeRepository.save(new Proyeccion("Captain America: Civil war","Steve Rogers era un joven de familia pobre que consiguió entrar en el ejército americano para combatir contra Hitler en la II Guerra Mundial. A cambio, tuvo que entregarse como conejillo de indias para un experimento para cambiar su constitución de enfermizo y convertirle en un súper-soldado. Gracias a ello, Steve Roger se convierte en un súperhombre y adquiere una fuerza y una agilidad asombrosa. A partir de ese momento, ya no será nunca más Steve Rogers, si no Capitán América.","portada5.jpg"));
		proyeRepository.save(new Proyeccion("X-Men: Apocalipsis","Desde los orígenes de la civilización, él fue venerado como un dios. Apocalipsis, el primero y más poderoso de los mutantes del Universo X-Men de Marvel, se hizo con los poderes de otros muchos mutantes, convirtiéndose en inmortal e invencible. Tras su debilitamiento después de miles de años, su desilusión hacia el mundo le obliga a reclutar a un grupo de poderosos mutantes, incluyendo al descorazonado Magneto, para purificar la humanidad y crear un nuevo orden mundial, del cual estará al frente. Mientras el destino de la Tierra pende de un hilo, Raven con la ayuda del Profesor X tendrá que liderar un equipo de jóvenes X-Men para detener a su mayor enemigo y salvar a la humanidad de la destrucción total.","portada6.png"));
		proyeRepository.save(new Proyeccion("Dioses de Egipto","En medio de la tiranía absoluta del dios Set, quien ha usurpado el trono de Egipto sumiendo al próspero imperio en un total caos y desgobierno, un impensado pero valiente héroe conocido como Bek comienza un viaje con la misión de liberar a su mundo y rescatar a su verdadero amor. En esta lucha se une al dios Horus, con quien irá al Más Allá en donde ambos deberán demostrar su valentía y sacrificio.","portada1.jpg"));
		proyeRepository.save(new Proyeccion("Zoolander 2","Han pasado 10 años desde que dejamos a Derek inaugurando su “Centro para niños que no saben leer chachi” y las cosas no han ido nada bien. Debido a una serie de desastres Zoolander decide exiliarse ya que ha perdido “su fuego” y durante más de una década pasa a convertirse en un fantasma. Derek se verá obligado a volver al mundo de la moda cuando las estrellas de rock de todo el mundo comienzan a ser asesinadas y todo indica a que él es el único que puede resolver el misterio. En esta nueva aventura tendrá que afrontar todos sus miedos y su pasado para volver a convertirse en el número 1 de la pasarela. ","portada7.jpg"));
		proyeRepository.save(new Proyeccion("Kung Fu Panda 3","Po ha salvado el mundo innumerables veces, pero nada de eso le ha preparado para el desafío más grande, agradar a dos padres. Po se reúne con su pare biológico y regresa a su hogar natal, sólo para darse cuenta de que no encaja. Allí conoce a la ansiosa Mei Mei, a la que se la ha prometido que se casará con Po. Además nuestro protagonista deberá luchar con un malvado espíritu llamado “El Coleccionista”, que tiene la capacidad de absorber los poderes de los maestros de Kung Fu a los que derrota. Y sus ojos están puestos en Po.","portada8.JPG"));
		proyeRepository.save(new Proyeccion("Ciudades de Papel","Quentin Jacobsen ha pasado toda su vida amando en secreto a la aventurera Margo Roth Spiegelman. Así que cuando ella rompe una ventana y entra en su vida disfrazada de ninja y reclutándole para una misión de venganza, él le sigue sin dudar. Después de que la noche que han pasado juntos termine y el día comience, Q llega al colegio para descubrir que Margo, que siempre ha sido un enigma, ahora es un completo misterio. Pero Q descubre que hay pistas y que son para él. Andando por un camino sin conexión, cuanto más cerca está, menos ve de la chica que él creía que conocía.","portada9.png"));
		
		
		
		globalRepository.save(new GlobalData());
	
	}

}
