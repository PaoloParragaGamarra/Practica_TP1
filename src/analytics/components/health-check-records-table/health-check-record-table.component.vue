<script>
import { HealthCheckRecordService } from "@/analytics/service/health-check-records-service/health-check-record.service.js";
import { TreadmillService } from "@/analytics/service/treadmills-service/treadmill.service.js";
import { CentersService } from "@/shared/service/centers/centers.service.js";
import {HealthCheckRecordEntity} from "@/analytics/models/health-check-records-model/health-check-record.entity.js";

export default {
  name: 'health-check-record-table',
  data() {
    return {
      treadmillData: null,
      centerData:null,
      healthCheckData:null,
      treadmills: [] ,
      centers: [],
      healthChecks: [],
      healthCheckRecordService: new HealthCheckRecordService(),
      treadmillService: new TreadmillService(),
      centerService: new CentersService(),
    }
  },
  methods: {
    async getHealthCheckRecords() {
      return this.healthCheckRecordService.getRecords().then((response) => {
        this.healthChecks = response.data.map(record => {
          return {
            id: record.id,
            treadmillid: record.treadmillid,
            year: record.year,
            month: record.month,
            day: record.day,
            hour: record.hour,
            minutes: record.minutes,
            seconds: record.seconds,
            volts: record.volts,
            watts: record.watts,
            hp: record.hp
          };
        });
      });
    },
    async getTreadmills() {
      return this.treadmillService.getTreadmills().then((response) => {
        this.treadmills = response.data.map(record => {
          return {
            id: record.id,
            serialNumber: record.serialNumber,
            centerId: record.centerId
          };
        });
      });
    },
    async getCenters() {
      return this.centerService.getCenters().then((response) => {
        this.centers = response.data.map(record => {
          return {
            id: record.id,
            name: record.name
          };
        });
      });
    },
    combineData() {
      this.healthChecks.forEach(check => {
        const relatedTreadmill = this.treadmills.find(treadmill => treadmill.id === check.treadmillid);
        const relatedCenter = this.centers.find(center => center.id === relatedTreadmill.centerId);

        if (relatedTreadmill && relatedCenter) { // Verifica si los objetos no son undefined
          check.serialNumber = relatedTreadmill.serialNumber;
          check.centerName = relatedCenter.name;
        }
      });
      console.log("hola:" , this.healthChecks)
    }
  },
  created() {
    this.healthCheckRecordService = new HealthCheckRecordService();
    this.treadmillService = new TreadmillService();
    this.centerService = new CentersService();

    Promise.all([
      this.getHealthCheckRecords(),
      this.getTreadmills(),
      this.getCenters()
    ]).then(() => {
      // Lógica para combinar los datos aquí
      this.combineData();
    });
  },
}
</script>

<template>
  <pv-dataTable :value="healthChecks"  paginator rows="10" sortMode="multiple" :rowsPerPageOptions="[10,25,50]">
    <pv-column field="id" header="Record ID"></pv-column>
    <pv-column field="treadmillid" header="Treadmill ID"></pv-column>
    <pv-column field="serialNumber" header="Serial Number"></pv-column>
    <pv-column field="centerName" header="Center Name"></pv-column>
    <pv-column field="month" header="Date"></pv-column>
    <pv-column field="hour" header="Time"></pv-column>
    <pv-column field="volts" header="Volts"></pv-column>
    <pv-column field="watts" header="Watts"></pv-column>
    <pv-column field="hp" header="HP"></pv-column>
  </pv-dataTable>
</template>

<style scoped>
</style>