// Footer.vue

<template>
    <div class="row justify-content-center">
        <footer class="page-footer font-small blue pt-4">
            <!-- Footer Links -->
            <div class="container-fluid text-center text-md-left">
                <!-- Grid row -->
                <div class="row">
                    <!-- Grid column -->
                    <div class="col-md-4 mt-md-0 mt-3">
                        <!-- Content -->
                        <h4 class="text-uppercase text-center">CURSO META</h4>
                        <h5 class="text-center">Nossa Meta é o seu futuro!</h5>
                        <h6 class="text-center mb-5">
                            CNPJ: 05.774.865/0001-29<br /><br />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.9042504093118!2d-48.944984184666616!3d-16.32783594065199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea4672b2c2293%3A0x5794a076536d6a1c!2sAv.%20Profa.%20Zenaide%20Roriz%2C%2045%20-%20Jundia%C3%AD%2C%20An%C3%A1polis%20-%20GO%2C%2075110-790!5e0!3m2!1spt-PT!2sbr!4v1575248036266!5m2!1spt-PT!2sbr"
                                width="300"
                                height="225"
                                frameborder="0"
                                class="mapa"
                                style="border:0;"
                                allowfullscreen=""
                            ></iframe>
                            <br />
                        </h6>
                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3" />

                    <!-- Grid column -->
                    <div class="col-md-4 mb-md-0 mb-4">
                        <!-- Links -->
                        <h5 class="text-uppercase text-center">
                            Nossos Numeros
                        </h5>
                        <ul class="list-unstyled">
                            <li>
                                <h5 class="text-center">7093 Alunos</h5>
                            </li>
                            <li>
                                <h5 class="text-center">11 Cursos</h5>
                            </li>
                            <li>
                                <h5 class="text-center">1483 Aulas</h5>
                            </li>
                            <li>
                                <h5 class="text-center">1835 Horas Aula</h5>
                            </li>
                            <br />
                            <br />
                            <li>
                                <h3 class="text-center">
                                    "O melhor ensino para sua aprovação! <br />
                                    ~Guilherme Diniz"
                                </h3>
                            </li>
                        </ul>
                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3" />

                    <!-- Grid column -->
                    <div class="col-md-4 mb-md-0 mb-4">
                        <!-- Links -->
                        <h5 class="text-uppercase text-center">Contato</h5>
                        <ul class="list-unstyled">
                            <li>
                                <h5 class="text-center">
                                    <a href="" title=""
                                        ><img
                                            src="../../css/telephone-symbol-button.png"
                                            class="img-responsive phone text-center"
                                    /></a>
                                    (62) 3317-4753
                                </h5>
                            </li>
                            <li>
                                <h5 class="text-center">
                                    <a href="" title=""
                                        ><img
                                            src="../../css/whatsapp.png"
                                            class="img-responsive wpp text-center"
                                    /></a>
                                    (62) 99169-2145
                                </h5>
                            </li>
                            <br />
                            <li>
                                <h5 class="text-center h2-txt">
                                    cursometa@gmail.com <br />
                                    <a
                                        href="https://www.instagram.com/meta.educacional/"
                                        title=""
                                        ><img
                                            src="../../css/instagram.png"
                                            class="img-responsive ig-logo-ft text-right"
                                    /></a>
                                    <a
                                        href="https://twitter.com/professorwlima"
                                        title=""
                                        ><img
                                            src="../../css/twitter.png"
                                            class="img-responsive tt-logo-ft text-right"
                                    /></a>
                                    <a
                                        href="https://www.youtube.com/channel/UC_3bp8uvpd7QWdVkNtVCTPQ/featured"
                                        title=""
                                        ><img
                                            src="../../css/youtube.png"
                                            class="img-responsive yt-logo-ft text-right"
                                    /></a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
            <!-- Footer Links -->
            <hr class="clearfix w-100 d-md-none pb-3" />
            <!-- Copyright -->
            <div class="footer-copyright text-center py-3">
                © 2019 Copyright:
                <a href="https://cursometa.com">Eduacional Meta</a>
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>

<style>
@import "../../css/styles.css";
</style>
