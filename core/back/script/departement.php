<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

    require('../connexion.php');

    //data
    if(isset($_POST['d'])){
        $d = $_POST['d'];

    //type
    }if(isset($_POST['t'])){
        $t = $_POST['t'];
    }

    if($t == "region"){
        $table = "france_region";
    }
    if($t == "departement"){
        $table = "france_departement";
    }

    $select = 'SELECT departement_id, numéro, libelle, code FROM ' . $table . ' WHERE code = "' . $d . '"';     
    $result = $bdd->prepare($select);
    $result->setFetchMode(PDO::FETCH_OBJ);
    $result->execute();
    $resultat = $result->fetchAll();

    
        echo "<div>" . $r->numéro . "</div> </br>";
        echo "<div>" . $r->libelle . "</div> </br>";
        echo "<div>" . $r->code . "</div>";
    }
    foreach($resultat as $r) {
        $return = array($r->numéro, $r->libelle, $r->code);
        echo json_encode($return);
    }
    
?>