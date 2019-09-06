# functional-exercises


   Paradigmas - Functional 
Katas

Suma de Enteros

Crear una función sum(n)que devuelva la suma de una secuencia de enteros. Si la misma posee valores que no son números debe lanzar un error.

Adición Funcional

Crear una función add(n)/Add(n)que devuelva una función que siempre sume n a cualquier número dado como parmámetro.

Issue Tracker

Ustedes fueron contratados para implementar un sistema de tackeo de issues (Issue Tracker). Se desea que el sistema soporte funciones básicas como:
Crear un  issue con todos sus datos 
Title, Description, Author
Estado inicial = New.
Realizar actualizaciones de alguno/s de sus datos teniendo en cuenta reglas de negocio asociadas
Transicionar un issue a su próximo estado válido (tener en cuenta que, de acuerdo al estado en que se encuentre el mismo, habrá operaciones que no podrá ejecutar, ver detalle de estados más abajo)



Diagrama de Estados y Ciclo de vida de un Issue
New -> ToDo -> Doing -> Done

New: Estado inicial en el que arranca el issue. Mientras esté en este estado se pueden realizar todas las modificaciones que se deseen al issue en cuestión.

ToDo: Estado que indica que el issue está listo para iniciarse. Sólo se puede llegar a partir de New y una vez en el mismo no se permiten realizar modificaciones. Se puede volver a New.

Doing: Estado que indica que le issue está en progreso. Sólo se puede llegar a partir de ToDo y una vez en el mismo no se permiten realizar modificaciones. Se puede volver a ToDo.

Done: Estado que indica que el issue está completado. Sólo se puede llegar a partir de Doing, y una vez en el mismo no se pueden realizar modificaciones ni se puede transicionar a otro estado. Es el fin del ciclo de vida de un issue. 

Complex Query Module
Se solicita implementar un módulo en el sistema que permita realizar consultas complejas sobre los issues, a fin de soportar la adición futura de un dashboard de monitoreo. El sistema a sido un éxito y se han creado millones de issues, los cuales se han persistido en un cluster distribuído de nodos para su almacenameinto.
Se les solicita implementar el módulo de consultas sobre los issues, para lo que se piden las siguientes consultas:

1- La cantidad de issues que están en estado ToDo por autor de los mismos.
2- Una lista de las personas que tienen más de un issue en Doing al mismo tiempo.
3- La cantidad de issues que están en estado Done por módulo del sistema.


A los efectos de la Kata, se proporcionarán datos de ejemplo y tests que deben pasar para el conjunto de datos dado.

