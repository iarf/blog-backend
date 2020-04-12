<template>
    <div class="admin">
        <b-container fluid>
            <b-row>
                <b-col>
                    <div class="login-card">
                        <h1>Admin Panel</h1>
                        <hr>
                        <p>Please sign in</p>
                        <b-form>
                            <!-- email -->
                            <b-form-group
                            label="Email"
                            label-for="email"
                            >
                                <b-form-input
                                id="email"
                                required
                                placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>
                            <!-- password -->
                            <b-form-group
                            label="Password"
                            label-for="password"
                            >
                                <b-form-input
                                id="password"
                                type="password"
                                required
                                placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>
                            <div class="button-wrapper">
                                <b-button type="submit" variant="primary">Sign in</b-button>
                            </div>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>
    .login-card
        position: relative
        top: 60px
        width: 300px
        box-shadow: 0 0 10px -7px black
        border-radius: 4px
        border: 1px solid #cfcfcf
        margin: auto
        padding: 20px
        background: white
        form
            text-align: left
            margin-top: 15px
            .button-wrapper
                text-align: center
</style>
