Formation Angular
=================


Javascript
----------
* on utilise plutôt *let* et *const* que *var*
* pour *const*, c'est l'adresse mémoire qui est constante. Donc un tableau peut être modifié.
* http://workshop.byteclub.fr/javascript/

Angular
-------
* http://workshop.byteclub.fr/angular/
* Angular détecte les changements quand la référence d'un objet change.
* Si on met la detection des changements à onPush, on a de meilleurs perfs et c'est plus propre
* Du coup, si on modifie un objet, on fait une copie de l'objet. Avant on utilisait Object.assign(), maintenant on utilise l'opérateur ...
* Le projet : http://29ac9ecf.ngrok.io/
* Start de projet : ng new --prefix tf --skip-tests --routing time-flies
* Start de composant : ng g c time-list 
* Start d'interface : ng g interface timer
* Start de service : ng g service timer
