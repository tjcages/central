<template>
  <div 

    class="row q-mb-sm">
        <q-input 
            outlined
            label="Due time"
            :value="dueTime"
            @input="$emit('update:dueTime', $event)"
            class="col"
            >
        <template v-slot:append>
        <q-icon
        v-if="dueTime"
        name="cancel"
        @click="$emit('update:dueTime', '')"
        class="cursor-pointer"
        />
        <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time 
            :value="dueTime"
            @input="$emit('update:dueTime', $event)"
            >
                <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
            </q-time>
            </q-popup-proxy>
        </q-icon>
        </template>
    </q-input>
    </div>
</template>

<script>
export default {
    props: ['dueTime']
}
</script>

<style>

</style>