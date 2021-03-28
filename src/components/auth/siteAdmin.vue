<template>
    <div>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <h2>Congratulations, you’re the Site Administrator!</h2>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <p>You’ll be responsible for configuring your office; creating user
                        accounts, setting up paging zones and message groups, sending
                        invites to new users, etc. Does this sound like a good fit for you?</p>
                </div>
            </div>
            <div class="row justify-content-md-center mb-5 mt-5">
                <div class="col-2">
                    <router-link to="create-site">
                        <button type="button" class="btn btn-success">
                            Bring it on!
                        </button>
                    </router-link>
                </div>
                <div class="col-2">
                    <router-link to="start-sign-up">
                        <button type="button" class="btn btn-light">Nope, I’ll pass</button>
                    </router-link>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-4">
                    <p>You can always delegate these responsibilities later, after the initial setup.
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "siteAdmin"
}
</script>

<style scoped>

</style>