
app.component('modal', {
    template: `
    <div v-show="$attrs['show-modal']" class="modal" @click.self="showModal=false">
        <div class="modal-dialogue">
                <h1>Let us contact you</h1>
                <hr>
                <form>
                    <fieldset>
                        <legend>Name</legend>
                        <p>
                            <select v-model="prefix">
                                <option value="Dr">Dr</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                            </select>
                        </p>
                        <p>
                            <input v-model="firstName" type="text" placeholder="First Name">
                        </p>
                        <p>
                            <input v-model="lastName" type="text" placeholder="Last Name">
                        </p>
                        <p>
                            {{fullName}}
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Contact Details</legend>
                        <p>
                            <input type="email" placeholder="Email">
                        </p>
                        <p>
                            <input type="tel" placeholder="Phone Number">
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Message</legend>
                        <p>
                            <textarea id="message" cols="35" rows="3"></textarea>
                        </p>
                    </fieldset>
                    <p>
                        <input type="submit" value="Submit">
                    </p>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            // for form
            prefix: 'Dr',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            // ----
        }
    },
    computed: {
        fullName() {
            return this.prefix + " " + this.firstName + " " + this.lastName;
        }
    }
})
