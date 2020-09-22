<template>
    <div>
        <label class="block">
            <span class="text-gray-700">{{$attrs.label}}</span>
            <input class="form-input mt-1 block w-full" :placeholder="$attrs.label" v-model="fieldValue">
        </label>
      </div>
</template>

<script>
    export default {
        name: "field",
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        computed:{
            fieldValue: {
                set(value) {
                    this.$emit('input', value)
                },
                get() {
                    return this.value
                },
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>