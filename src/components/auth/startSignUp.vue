<template>
    <div>
        <div class="container">
            <div class="row justify-content-md-center">
                <h3 class="col-4">Start with a Venga site</h3>
            </div>
            <div class="row justify-content-md-center">
                <small class="col-6">All Venga communicaiton revolves around your site, whether that’s
                    a single office or an entire campus. Everyone who’s a member of
                    your site will be able to communicate with one another.</small>
            </div>
                <hr>
            <div class="row justify-content-md-center">
                <div class="col-2 align-self-center">
                    <img src="https://us.123rf.com/450wm/maxsim/maxsim1304/maxsim130400086/19346389-bouton-internet-loupe-zoom.jpg?ver=6" class="media-object" style="width:60px">
                </div>
                <div class="col-4">
                    <h4 class="media-heading">Find your Venga Site</h4>
                    <p>Join or find an existing Venga site</p>
                    <p class="text-danger">*Could be any user type</p>
                </div>
                <div class="col-2  align-self-center">
                    <a  href="#" class="media-object">
                        <img src="https://img2.freepng.ru/20180417/vdw/kisspng-arrow-computer-icons-symbol-information-down-arrow-5ad58ed9cba6e2.8305633115239451778342.jpg" class="media-object" style="width:60px">
                    </a>
                </div>
            </div>
            <hr>
            <div class="row justify-content-md-center">
                <div class="col-2  align-self-center">
                    <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/blue-circle-with-cross-isolated-on-white_fJWb4LsO_thumb.jpg" class="media-object" style="width:60px">
                </div>
                <div class="col-4">
                    <h4 class="media-heading">Create a new Venga Site</h4>
                    <p>Get your office on Venga.</p>
                    <p class="text-danger">*Site admin user by default</p>
                </div>
                <div class="col-2  align-self-center">
                    <router-link to="/site-admin" class="media-object ">
                        <img src="https://img2.freepng.ru/20180417/vdw/kisspng-arrow-computer-icons-symbol-information-down-arrow-5ad58ed9cba6e2.8305633115239451778342.jpg" class="media-object" style="width:60px">
                        </router-link>
                </div>
            </div>
                <hr>
            <div class="row justify-content-md-center">
                <small>We’ll send a confirmation email to [email address from prior step]</small>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "startSignUp"
}
</script>

<style scoped>

</style>