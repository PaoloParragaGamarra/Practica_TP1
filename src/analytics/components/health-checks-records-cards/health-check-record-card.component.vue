<script >

import {HealthCheckRecordService} from "@/analytics/service/health-check-records-service/health-check-record.service.js";
import {HealthCheckRecordEntity} from "@/analytics/models/health-check-records-model/health-check-record.entity.js";

export default {
  name: 'health-check-record-card',
  data(){
    return {
      healthCheckData:null,
      healthChecks: [],
      healthCheckRecordService: new HealthCheckRecordService(),
      avgVolts: 0,
      avgWatts: 0,
      avgHp: 0,
    }
  },
  methods:{
    async getHealthCheckRecords(){
      await this.healthCheckRecordService.getRecords().then((response) => {
        response.data.forEach((record) => {
          const { id, treadmillid, year, month, day, hour, minutes, seconds, volts, watts, hp } = record;
          this.healthCheckData = new HealthCheckRecordEntity(id, treadmillid, year, month, day, hour, minutes, seconds, volts, watts, hp);
          this.healthChecks.push(this.healthCheckData);
        });
      })
    },
    calculateVoltAverage(){
      let totalVolts = 0;
      let validCount = 0;
      this.healthChecks.forEach((record) => {
        if (record.volts) {
          totalVolts += record.volts;
          validCount++;
        }
      });
      if (validCount > 0) {
        return this.avgVolts = totalVolts / validCount;
      }
    },
    calculateWattsAverage(){
      let totalWatts = 0;
      let validCount = 0;
      this.healthChecks.forEach((record) => {
        if (record.watts) {
          totalWatts += record.watts;
          validCount++;
        }
      });
      if (validCount > 0) {
        return this.avgWatts = totalWatts / validCount;
      }
    },
    calculateHpAverage(){
      let totalHp = 0;
      let validCount = 0;
      this.healthChecks.forEach((record) => {
        if (record.hp) {
          totalHp += record.hp;
          validCount++;
        }
      });
      if (validCount > 0) {
       return this.avgHp = totalHp / validCount;
      }
    },
  },

  created() {
    this.getHealthCheckRecords();
  },
}
</script>

<template>

  <pv-card>
    <template #title class="card-title">{{$t('average_performance')}}</template>
    <template #content>
      <div>
        <p>{{$t('average_volts')}} : {{calculateVoltAverage()}}</p>
        <p>{{$t('average_watts')}} : {{calculateWattsAverage()}}</p>
        <p>{{$t('average_hp')}} : {{calculateHpAverage()}}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-title {
  margin-bottom: 10px; /* Ajusta el margen inferior según sea necesario */
}
</style>