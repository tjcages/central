<template>
    <div class="row">
    <q-input
        autofocus
        label="Task name"
        :value="name"
        @input="$emit('update:name', $event)"
        class="col"
        ref="name"
        >
        <template v-slot:append>
            <q-icon
            v-if="name"
            name="cancel"
            @click="$emit('update:name', '')"
            class="cursor-pointer"
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