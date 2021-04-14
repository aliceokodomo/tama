
			var hunger = document.getElementById("hunger"); // L'élément span de la faim
			var happiness = document.getElementById("happiness"); // L'élément span du bonheur
			var tama = document.getElementById("tama"); // L'image de Tama

			// tamaLife contrôle le cycle de vie de Tama
			function tamaLife(){
				// Pour ajouter 5 à la faim, on modifie hunger.textContent = le contenu textuel du span
				// Et on convertit bien la valeur en nombre entier avec parseInt pour éviter un bug
				hunger.textContent  = parseInt(hunger.textContent) + 5;
				// Même chose => Le contenu textuel du bonheur = la valeur entière du bonheur - 5
				happiness.textContent = parseInt(happiness.textContent) - 5;;

				// Si Tama est malheureux
				if (parseInt(hunger.textContent) >= 70 || parseInt(happiness.textContent) <= 30){
					tama.src = "http://chloecabot.com/mmi/M3203/img/tama_unhappy.png";
				}
				// Sinon Tama est normal
				else{
					tama.src = "http://chloecabot.com/mmi/M3203/img/tama_alive.png";
				}

				// Si Tama est mort
				if (parseInt(happiness.textContent) <= 0 || parseInt(hunger.textContent) >= 100){
					tama.src = "http://chloecabot.com/mmi/M3203/img/tama_dead.png";

					clearInterval(interval); // On arrête l'intervalle
					// Et on enlève les écouteurs d'évènements : Si Tama est mort, on ne peux plus interagir avec lui
					tama.removeEventListener("mouseover", setHappiness);
					document.getElementById("go").removeEventListener("click", setFood);
				}


			}

			// setHappiness contrôle le bonheur de Tama
			function setHappiness(){
				document.getElementById("happiness").textContent = "100"; // Le bonheur passe à 100
				tama.src = "http://chloecabot.com/mmi/M3203/img/tama_happy.png"; // Tama est tout content
			}

			// setFood contrôle la nourriture de Tama
			function setFood(){
				var food_quantity = document.getElementById("food").value; // La valeur de l'input qu'on a saisi
				var food_INT = parseInt(food_quantity); // On convertit la valeur en entier
				if (!isNaN(food_INT) && food_INT <= hunger.textContent) // Si on a bien une valeur numérique et que la quantité de nourriture est inférieure ou égale à l'appétit
					hunger.textContent = parseInt(hunger.textContent) - food_INT; // on met à jour l'appétit de Tama
			}


			// Ajout des écouteurs
			tama.addEventListener("mouseover", setHappiness);
			document.getElementById("go").addEventListener("click", setFood);

			// Mise en place de l'intervalle
			var interval = setInterval(tamaLife, 2000);
