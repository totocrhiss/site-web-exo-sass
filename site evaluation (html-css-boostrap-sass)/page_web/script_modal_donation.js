var modalWrap = null;
const showModal = () => {
    if (modalWrap !== null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <!-- c'est la partie JavaScript pour importer le formulaire de donation
                ça permet d'alléger les fichiers met je n'ai aucune connaissance avec JavaScript
                s'est prévue dans la suite de mes cours cordialement Christian. -->

    <!-- Modal -->
    <div class="modal fade donation_modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center fs-6" id="exampleModalLabel">Aidez-nous à protéger notre environnement naturel.
                        <br> Vos dons permettent aussi aux enfants en situation de handicap à découvrir la faune et la flore.
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- formulaire nom et prénom et coordonnées -->

                    <div class="row row col-md-12">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Nom" aria-label="Nom">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Prénom" aria-label="NomDeFamille">
                        </div>
                    </div>
                    <form class="row g-3">
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="inputEmail4">
                        </div>

                        <div class="col-md-12">
                            <label for="inputAddress" class="form-label">Adresse</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Adresse">
                        </div>

                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Ville</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>

                        <div class="col-md-6">
                            <label for="inputZip" class="form-label">Code postal</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>

                        <div class="d-flex justify-content-center texte_donation_libre">
                            <p class="text-center">Vous pouvez choisir la somme que vous souhaiter <br> ou faire une donation libre
                            </p>
                        </div>
                        <!-- formulaire choix des dons Check Radio-->

                        <div class="form-check" style="position: relative ;">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">

                                <p class="d-flex fs-4" style="position: relative;bottom: 0.3em">10 <img
                                        class="mx-2 iconeEuro10" width="40em" src="vecteur/euroInkscape.svg"
                                        alt="icôneEuro"></p>
                            </label>
                        </div>

                        <div class="form-check" style="position: relative;bottom: 2em">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">

                                <p class="d-flex fs-4" style="position: relative;bottom: 0.25em">20 <img
                                        class="mx-2 iconeEuro10" width="40em" src="vecteur/euroInkscape.svg"
                                        alt="icôneEuro">
                                </p>
                            </label>
                        </div>

                        <div class="form-check pd-0" style="position: absolute; bottom: -1em">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">

                                <p class="d-flex fs-4" style="position: relative;bottom: 0.2em">30 <img
                                        class="mx-2 iconeEuro10" width="40em" src="vecteur/euroInkscape.svg"
                                        alt="icôneEuro">
                                </p>
                            </label>
                        </div>

                        <div class="form-check pd-0" style="position: absolute; bottom: -3.5em">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">

                                <p class="d-flex fs-4" style="position: relative;bottom: 0.3em ;color: blue;">Annuler</p>
                            </label>

                        </div>
                    </form>
                </div>


                <!-- formulaire dont libre -->

                <div class="container BoxDonLibre pb-5 px-3">
                    <p class="text-center pt-1 ">Don libre</p>
                    <div class="row">
                        <div class="input-group">
                            <span class="input-group-text" style="height: 3em;"><img width="40em"
                                    src="vecteur/euroInkscape.svg" alt="icôneEuro"></span>
                            <input type="text" class="form-control" maxlength="3" aria-label="Amount (euro)">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                </div>

                <!-- contrôle du footer pour le modal avec BoxFooterModal-->
                
                <div class="modal-footer BoxFooterModal d-flex justify-content-between ">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Quitter</button>
                     <button type="button" class="btn btn-primary">Paiement</button>
                </div>
            </div>
        </div>
    </div>

    `;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
};