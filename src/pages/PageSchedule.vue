<template>
  <q-page padding class="row NOflex NOflex-center">
    <q-card
        v-if="showCards.includes('fullCalendar')"
        inline
        class="full-width q-mx-md"
        flat
      >
        <q-card-section>
          <daykeep-calendar-agenda
            num-days="1"
            :event-array="eventArray"
            NOcalendar-locale="fr"
            NOcalendar-timezone="America/Los_Angeles"
            NOevent-ref="MYCALENDAR"
            :allow-editing="true"
            agenda-style="block"
            :render-html="true"
            :NOstart-date="new Date()"
          />
        </q-card-section>
      </q-card>

  </q-page>
</template>

<script>
  import {
    QPage,
    QCard,
    QCardSection,
    QOptionGroup
  } from 'quasar'
  import {
    DaykeepCalendar,
    DaykeepCalendarMonth,
    DaykeepCalendarMultiDay,
    DaykeepCalendarAgenda
  } from '@daykeep/calendar-quasar'
  import {
    MoveDates,
    sampleEventArray
  } from '@daykeep/calendar-core/demo'
  
  export default {
    name: 'PageIndex',
    components: {
      QPage,
      QCard,
      QCardSection,
      QOptionGroup,
      DaykeepCalendar,
      DaykeepCalendarMonth,
      DaykeepCalendarMultiDay,
      DaykeepCalendarAgenda
    },
    mixins: [ MoveDates ],
    data () {
      return {
        eventArray: sampleEventArray, // in page-code-mixins/sample-data.js
        showCards: ['fullCalendar']
      }
    },
    computed: {},
    methods: {},
    created () {
      this.moveSampleDatesAhead()
    }
  }
</script>

<style lang="stylus">
</style>
