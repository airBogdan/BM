<template lang="html">
    <div id="newPostContainer">
        <form>
            <div id="titleDiv">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="title">
            </div>

            <div id="descriptionDiv">
                <label for="description">Description</label>
                <textarea name="name" rows="8" cols="80" id="description" v-model="description"></textarea>
            </div>

            <div id="imageDiv">
                <p>Upload image by <span @click="uploadFile=false">image url</span> OR <span  @click="uploadFile=true">upload image</span> from your device</p>
                <p v-if="!uploadFile"> <span @click="imageUrl=''">Clear image</span> </p>

                <label v-if="!uploadFile" for="image">Image url</label>
                <input
                    v-if="!uploadFile"
                    type="text"
                    name="image"
                    id="image"
                    v-model="imageUrl"
                    :disabled="imageUrl!=''">
                <button v-else type="button" name="button" @click="choosePic">Upload file</button>
                <input type="file" @change="pickedFile" style="display: none" accept="image/*" ref="fileInput">
                <img :src="imageUrl" alt="" height="200px" width="200px">
            </div>

            <div id="createPost">
                <button type="button" name="button" @click="createPost">Create post</button>
            </div>
            <!-- <button type="button" @click="firebaseUpload">Upload to firebase</button> -->

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                title: '',
                description: '',
                uploadFile: false
            }
        },
        methods: {
            createPost() {
                const post = {
                    title: this.title,
                    description: this.description,
                    image: this.imageUrl
                }
                this.$store.dispatch('authenticate/addPost', post)
                .then(() => this.$router.push('/CRUD'))
            },
            // logout() {
            //     this.$store.dispatch('authenticate/logout')
            //         .then(() => {
            //             this.$router.push('/')
            //             alert('Succesfuly signed out')
            //         })
            // },
            choosePic() {
                this.$refs.fileInput.click()
            },
            pickedFile(event) {
                const files = event.target.files
                let filename = files[0].name
                if (filename.lastIndexOf('.')<=0) {
                    return alert('Please add a valid file')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            },
            // firebaseUpload() {
            //     this.$store.dispatch('authenticate/firebaseUpload', this.image)
            // }
        },
    }
</script>

<style lang="scss" scoped>
    #newPostContainer {
        max-width: 900px;
        margin: 50px auto;
    }
    #descriptionDiv, #imageDiv, #titleDiv, #createPost {
        max-width: 450px;
        margin: auto;
        display: flex;
        flex-direction: column;
        // justify-content: center;
    }
    #imageDiv {
        // button {
        //     display: block;
        //     margin-bottom: 20px;
        // }
        span {
            color: red;
            cursor: pointer;
        }
    }

</style>
