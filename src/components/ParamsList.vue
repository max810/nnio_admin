<template>
  <table class="table table-bordered">
    <tr v-for="param of params" v-bind:key="param.name">
      <td class="fit">
        <input-regex-check
            v-model="param.name" v-bind:regex="rc.nameRegex"></input-regex-check>
      </td>
      <td>
        <div class="form-check form-check-inline">
          <label>
            Type:
            <select v-model="param.type"
                    class="">
              <option v-for="t of JSONTypes">
                {{ t }}
              </option>
            </select>
          </label>
          <label class="form-check-label">
            <input type="checkbox" v-model="param.required">
            Required
          </label>
        </div>
        <div>
          <a
              class
              data-toggle="collapse"
              v-bind:href="`#${baseId}-${param.name}-additional-constraints`"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
            Additional constraints
          </a>
          <div
              class="collapse"
              v-bind:id="`${baseId}-${param.name}-additional-constraints`">
            <div class="card card-body">
              <constraints v-bind:param="param" v-bind:baseId="`constraints-` + baseId.toString()"></constraints>
            </div>
          </div>
        </div>
      </td>
      <td>
        <close-button v-on:click="deleteParam(param)"></close-button>
      </td>
    </tr>
    <tr>
      <td>
        <button v-on:click="addParam">
          Add param
        </button>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import LayerParam from '@/classes/LayerParam';
  // Is required dynamically to avoid cyclical references
  // import Constraints from '@/components/Constraints.vue';
  import {JSONTypes} from "@/constants";
  import CloseButton from '@/components/CloseButton.vue';
  import InputRegexCheck from '@/components/InputRegexCheck.vue';

  @Component({
    components: {CloseButton, InputRegexCheck}
  })
  export default class ParamsList extends Vue {
    @Prop(Array) params: LayerParam[] | undefined;
    @Prop(String) baseId: string | undefined;
    private rc = InputRegexCheck;
    private JSONTypes = JSONTypes;
    name = "params-list";

    deleteParam(param: LayerParam) {
      this.params!.splice(this.params!.indexOf(param), 1);
    }

    addParam(event: MouseEvent) {
      this.params!.push(LayerParam.createDefault());
    }

    beforeCreate() {
      if (this.$options.components) {
        this.$options.components.Constraints = require("@/components/Constraints").default;
      } else {
        console.log("FAILED FAILED FAILED IMPORT CONSTRAINTS");
      }
    }
  }

</script>

<style scoped>
  input {
    margin: 0 0.3rem;
  }


</style>