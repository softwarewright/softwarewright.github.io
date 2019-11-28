<template>
    <social-sharing 
        :url="'https://softwarewright.dev' + url"
        :quote="quote"
        :hashtags="hashtags.join(',')"
        twitter-user="softwarewright" inline-template>
        <div class="social">
            <network network="facebook">
                <fa-icon class="social-icon fcebook hvr-grow" :icon='["fab", "facebook-square"]' />
            </network>
            <network network="linkedin">
                <fa-icon class="social-icon linkedin hvr-grow" :icon='["fab", "linkedin"]' />
            </network>
            <network network="reddit">
                <fa-icon class="social-icon reddit hvr-grow" :icon='["fab", "reddit"]' />
            </network>
            <network network="twitter">
                <fa-icon class="social-icon twitter hvr-grow" :icon='["fab", "twitter"]' />
            </network>
        </div>
    </social-sharing>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        title: String,
        description: String,
        quote: "Let's Learn Together!",
        hashtags: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style>
.social {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: .5rem 0;
}

.social-icon {
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 4px;
}

.twitter {
    color: #00acee;
}

.facebook {
    color: #3b5998;
}

.reddit {
    color: #FF4301;
}

.linkedin {
    color: #0e76a8;
}
</style>