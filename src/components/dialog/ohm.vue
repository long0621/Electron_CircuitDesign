<template>
  <v-dialog
    v-model="dialog"
    width="400"
    persistent 
  >
    <v-card>
      <!-- 標題 -->
      <v-card-title class="headline grey lighten-2">
        Ohm's law
      </v-card-title>
      <!-- 主內容 -->
      <v-form ref="form">
        <div class="px-5">
          <v-col class="px-5">
            <v-text-field
              v-model="current"
              :label="'current(A)'"
              :rules="[rules.required]"
              :error-messages="errorMessage"
              :hide-details="true"
              @input="clearErrorMessage"
              class="field_name input w-100 mb-10"
              dense
            ></v-text-field>
            <v-text-field
              class="mb-10"
              v-model="resistance"
              :label="'resistance(ohm)'"
              :rules="[rules.required]"
              :error-messages="errorMessage"
              :hide-details="true"
              @input="clearErrorMessage"
              dense
            ></v-text-field>

            <div class="mt-4 m-auto">Result = {{ohmResult.voltage}} V</div>
          </v-col>
          
        </div>
			</v-form>

      <!-- 分隔線及下方按鈕 -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="d-flex flex-row-reverse">
          <v-btn
            color="red"
            text
            @click="startCalculate"
          >
            run
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="closeDialog"
          >
            close
          </v-btn>
        </div>
        
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  ame: "ohm",
  props: {
		dialog: {
			type: Boolean,
			default: function() {
				return false;
			}
		},
  },
  data() {
    return {
      current:"",
      resistance:"",
      rules: {
				required: value => !!value || "entervalue"
			},
			errorMessage: '',
    }
  },
  methods: {
    closeDialog(){
      this.$emit('childMethod');
    },
    calculate(){

    },
    clearErrorMessage() {
			this.errorMessage = '';
    },
    async startCalculate() {
      const vm = this;
      if (vm.$refs.form.validate()) {
        const data = {
          current:vm.current,
          resistance:vm.resistance
        }
      await vm.$store.dispatch('AskOhm', data);

      }
    }
  },
  computed: {
		...mapState({
			ohmResult:"ohmResult"
		})
	},
  
}
</script>