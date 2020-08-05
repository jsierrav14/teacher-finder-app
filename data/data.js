import Teacher from "../models/Teacher";
import Topic from "../models/Topic";

export const TEACHERS = [
    new Teacher(
        'u1',
        require('../assets/jose-perfil.jpeg'),
        'Jose Eduardo Sierra',
        'Profesor de programacion',
        'Sabaneta- Antioquia',
        [
            {
                id: 'u1',
                name: 'Sociales'
            },
            {
                id: 'u2',
                name: 'Programacion'
            },
            ,
            {
                id: 'u3',
                name: 'Matematicas'
            }
        ]),
    new Teacher(
        'u2',
        require('../assets/miguel-perfil.jpeg'),
        'Miguel Antonio Atencia',
        'Profesor de Ingles',
        'Cartagena',
        [
            {
                id: 'u1',
                name: 'Sociales'
            },
            {
                id: 'u2',
                name: 'Programacion'
            },
            ,
            {
                id: 'u3',
                name: 'Matematicas'
            }
        ]),
    new Teacher(
        'u3',
        require('../assets/mark-perfil.jpeg'),
        'Mark Zucaritas',
        'Profesor de IT',
        'USA',
        [
            {
                id: 'u1',
                name: 'Sociales'
            },
            {
                id: 'u2',
                name: 'Programacion'
            },
            
            {
                id: 'u3',
                name: 'Matematicas'
            }
        ]),
    new Teacher(
        'u4',
        require('../assets/dario-perfil.jpg'),
        'Dario Cabeza',
        'Profesor de Matematicas',
        'Torices cartagena',
        [
            {
                id: 'u1',
                name: 'Sociales'
            },
            {
                id: 'u2',
                name: 'Programacion'
            },
            
            {
                id: 'u3',
                name: 'Matematicas'
            }
        ]),
    new Teacher(
        'u5',
        require('../assets/david-perfil.jpg'),
        'David Mendoza',
        'Jose',
        'Profesor de Informatica',
        'Los alpes',
        [
            {
                id: 'u1',
                name: 'Sociales'
            },
            {
                id: 'u2',
                name: 'Programacion'
            },
            
            {
                id: 'u3',
                name: 'Matematicas'
            }
        ])

]

export const TOPICS =[
   new Topic('u5','t1','Programacion'),
   new Topic('u5','t2','Matematicas'),
   new Topic('u5','t3','Ingles'),
   new Topic('u4','t4','Derivadas'),
   new Topic('u4','t5','Integrales'),
   new Topic('u1','t6','Derivadas'),
   new Topic('u1','t5','Integrales')
]