<template>
    <div>
        <div class="row my-3" v-if="!showComments">
            <button  @click="showComments=true" class="btn btn-cta btn-lg  mx-auto hvr-grow">View Comments</button>
        </div>
        <transition name="slideDown">
            <vue-disqus v-if="showComments"  :shortname="shortname" :identifier="identifier" :url="url" />
        </transition> 
    </div>   
</template>
<script>
export default {
    props: {
        shortname: {
            type: String,
            required: true,
            default:"softwarewright"
        }, 
        identifier: {
            required: true,
            type: String
        },
        url: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            showComments: false
        }
    }
}
</script>
<style scoped>
    .btn-cta {
        font-size: 2rem;
        color: #fff;
        background-color: #44b0e4;
        padding: 0.8rem 1.6rem;
        border-bottom: 1px solid #2aa5e0;
    }
</style>