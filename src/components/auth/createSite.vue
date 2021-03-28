<template>
    <div>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <h2>Check your email</h2>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <small>We’ve sent a six-digit confirmation code to [email address]. It will
                        expire shortly, so please enter it soon.
                    </small>
                </div>
            </div>
            <div class="row justify-content-md-center mb-3 mt-3">
                <div class="col-3">
                    <label>Your confirmation code</label>
                    <input type="text">
                </div>
            </div>
            <div class="row justify-content-md-center mb-4 mt-4">
                <div class="col-2">
                    <button type="button" class="btn btn-success">Confirm Code
                    </button>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-4">
                    <small>Keep this window open while you check for email for your code.
                        If you haven’t received it yet, check your spam folder!
                    </small>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "createSite"
}
</script>

<style scoped>

</style>