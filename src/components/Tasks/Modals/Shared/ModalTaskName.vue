<template>
    <div class="col" color="black">
    <q-input   
        :value="name"
        @input="$emit('update:name', $event)"
        class="col"
        standout="bg-grey-1"
        placeholder="Add a new taks"
        ref="name"
        >
        <template v-slot:append>
            <q-icon
            v-if="name"
            name="cancel"
            @click="$emit('update:name', '')"
            class="cursor-pointer col"
            />
        </template>
    </q-input>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>