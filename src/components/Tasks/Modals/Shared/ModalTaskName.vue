<template>
    <div class="row q-mb-sm">
    <q-input
        outlined
        autofocus
        label="Task name"
        :value="name"
        @input="$emit('update:name', $event)"
        class="col"
        :rules="[val => !!val || 'Field is required']"
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