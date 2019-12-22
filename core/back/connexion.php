<?php 
    
$host    = 'localhost';   // adresse du serveur
$dbname  = 'quizz';       // nom de la base de données
$user    = 'root';      // nom d'utilisateur de la BDD
$pass    = 'root';     //  mot de passe de l'utilisateur

$options  = array( 
  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' 
); 

try { 
	
  $bdd = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass, $options); 
	
} catch(Exception $e) { 
var_dump($e);
  die('Connexion à la base de données impossible <form method="post" id="logout_form">
          <input type="submit" name="page_logout" value="Déconnexion">
      </form>'); 

}
?>