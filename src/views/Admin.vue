<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <div class="list-group" id="list-tab" role="tablist">
          <a
              class="list-group-item list-group-item-action"
              v-for="lSchema of layerSchemas"
              v-bind:id="`list-${lSchema.layerType}-list`"
              data-toggle="list"
              v-bind:href="`#list-${lSchema.layerType}`"
              role="tab"
              v-bind:aria-controls="lSchema.layerType"
              v-bind:key="lSchema.layerType"
          >{{ lSchema.layerType }}</a>
          <div class="list-group-item">
            <button class="btn btn-primary" v-on:click="addLayerSchema" style="width: 100%; height: 100%;">+
            </button>
          </div>
          <br>
          <br>
          <br>
          <br>
          <div class="list-group-item">
            <button class="btn btn-success" v-on:click="saveSchemas" style="width: 100%; height: 100%;">Save
            </button>
          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="tab-content" id="nav-tabContent">
          <div
              v-for="lSchema of layerSchemas"
              class="tab-pane fade show"
              v-bind:id="`list-${lSchema.layerType}`"
              role="tabpanel"
              v-bind:aria-labelledby="`list-${lSchema.layerType}-list`"
          >
            <button class="btn btn-sm btn-success" v-on:click="clone(lSchema)">Clone layer</button>
            Rename layer:
            <input-regex-check v-bind:regex="rc.nameRegex" v-model="lSchema.layerType"></input-regex-check>
            <close-button v-on:click="deleteLayerSchema(lSchema)"></close-button>
            <br>
            <br>
            <params-list v-bind:params="lSchema.layerParams" v-bind:baseId="lSchema.layerType">
            </params-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<div>

</div>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Axios from "axios";
  import {backendUrls, JSONTypes} from "@/constants";
  import LayerSchema from '@/classes/LayerSchema';
  import Constraints from '@/components/Constraints.vue';
  import ParamsList from '@/components/ParamsList.vue';
  import CloseButton from '@/components/CloseButton.vue';
  import {parseLayersSchemas} from '@/utils/LayerSchemaParsing';
  import {layerSchemasToJsonSchemas} from '@/utils/LayerSchemaSaving';
  import InputRegexCheck from '@/components/InputRegexCheck.vue';

  @Component({
    components: {InputRegexCheck, ParamsList, Constraints, CloseButton}
  })
  export default class Admin extends Vue {
    layerSchemas: LayerSchema[] = [];
    private JSONTypes = JSONTypes;
    private rc = InputRegexCheck;

    saveSchemas() {
      console.log("OK!");
      const results = layerSchemasToJsonSchemas(this.layerSchemas);
      (<any>window).RESULTS = results;

      Axios
        .post(backendUrls.saveLayersSchemas, results)
        .then(
          response => {
            console.log(response);
            alert('Saved successfully!');
          },
          err => {
            console.log(err);
          });
    }

    deleteLayerSchema(lSchema: LayerSchema) {
      this.layerSchemas!.splice(this.layerSchemas!.indexOf(lSchema), 1);
    }

    addLayerSchema(event: MouseEvent) {
      this.layerSchemas!.push(LayerSchema.createDefault());
    }

    clone(lSchema: LayerSchema) {
      const lSchemaClone = lSchema.clone();
      // const names = this.layerSchemas!.map(x => x.layerType);
      // const lastNumbersReversed = names.map(x => parseInt(x.split('').reverse().join('')));
      // const lastNumbers = lastNumbersReversed.map(x => parseInt(x.toString().split('.').reverse().join('')));
      //
      // lastNumbers.sort((a, b) => b - a);  // descending order
      // const largestNumber = lastNumbers[0];
      lSchemaClone.layerType += '1';
      this.layerSchemas!.push(lSchemaClone);
    }

    mounted() {
      console.log("MOUNTED!");
      Axios
        .get(backendUrls.getLayersSchemas)
        .then(
          response => {
            console.log(response);
            this.layerSchemas = parseLayersSchemas(response.data);
          },
          err => {
            if (err.status == 401) {
              this.$router.push({name: 'login', params: {msg: 'LOGIN EXPIRED'}});
            }
          });
    }
  }


</script>

<style>

</style>