# tama
jeu tama Céline et Alice


prévoir une notice de jeu


etats de l'animal: 
alive
happy
hunger 
sleepy
unhappy
dead

add water bowl : empty every 2000 millisecond , to be filled by a click progressively with 2 cliccks :  50 100 full water bowl
if 0 water empty and 100 hungry 0 happiness = dead


may be later , add: 
sleepy
sick

////////////////////////////////


Stockez dans deux variables hunger et happiness les éléments span avec les identifiants correspondants.
Écrivez la fonction tamaLife qui va simuler les étapes de la vie de Tama :

    Elle ajoute 5 points à la valeur de l'appétit de Tama.
    Elle enlève 5 points à la valeur du bonheur de Tama.
    Si la faim est supérieure à 70 ou le bonheur inférieur à 30, Tama est malheureux. L'attribut src de l'élément tama prend cette valeur : "http://chloecabot.com/mmi/M3203/img/tama_unhappy.png".
    Dans le cas contraire, Tama est dans un état normal. Son image est donc celle-ci : "http://chloecabot.com/mmi/M3203/img/tama_alive.png".
    Cas particulier : si la faim est égale à 100 ou le bonheur à 0, Tama meurt. L'attribut src de l'élément tama prend cette valeur : "http://chloecabot.com/mmi/M3203/img/tama_dead.png".

Lancez la fonction tamaLife toutes les secondes avec setInterval. Stockez bien la valeur du retour de la fonction dans une variable interval.
Dans la fonction tamaLife, quand Tama meurt, ajoutez un appel à clearInterval pour stopper les compteurs.
À ce stade, vous pouvez tester votre Tamagotchi. Le bonheur et l'appétit de Tama vont progresser jusqu'à ce qu'il meure, sans que vous ne puissiez rien faire !
Écrivez la fonction setHappiness qui va :

    Modifier la valeur du bonheur à 100, le maximum.
    Changer l'image de Tama. Son attribut src prend cette valeur : "http://chloecabot.com/mmi/M3203/img/tama_happy.png".

Ajoutez un écouteur d'évènements sur l'image d'identifiant tama qui appelle la fonction setHappiness au survol de l'image.
Écrivez la fonction setFood qui va :

    Récupérer la quantité de nourriture qui est donnée à Tama par le champ input d'identifiant food. Pensez à vérifier que la valeur récupérée est un nombre entier à l'aide des fonctions parseInt et isNaN.
    Diminuer la valeur de l'appétit de Tama de cette même quantité.

Ajoutez un écouteur d'évènements sur le bouton d'identifiant go qui appelle la fonction setFood quand le bouton est cliqué.

   
