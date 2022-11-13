<!-- <!-- <template lang="pug">
.main
    .field
    .field.is-horizontal(style="align-items: center; margin-bottom: 2rem;")
        .field-label.is-small
        label.label 大学名
//-       .field-body
//-         .field
//-           .control
//-             .select.is-fullwidth
//-               select(v-model="selectedUniversity"  @change="getUniversityValue")
//-                 option(value="")
//-                 option(v-for="organization in organizations" :value="organization[0]")
//-                   p {{organization[1]}}
//-                 option(value="-1") 該当なし
//-   .field
//-     .field.is-horizontal(style="align-items: center; margin-bottom: 2rem;")
//-       .field-label.is-small
//-         label.label 都道府県
//-       .field-body
//-         .field
//-           .control
//-             .select.is-fullwidth
//-               select(v-model="selectedAssociate" @change="getAssociateValue")
//-                 option(value="")
//-                 option(v-for="organization in associations" :value="organization[0]")
//-                   p {{organization[1]}}
//-                 option(value="-1") 該当なし
//-   .field
//-     .input-field.field.has-text-centered(style="margin-bottom: 2rem;")
//-       label(for="temporaryUserCheckBox") 私は大学在学中の学生です
//-       input(type="checkbox" id="temporaryUserCheckBox" checked='' class="js-filter" value="checkbox-temporary_user" )
//-     .buttons.has-addons.is-centered
//-       button(name="button" type="submit" class="is-primary button" @click="submitTemporaryUser")
//-         | 一時登録をはじめる
</template> -->
<script>
    // import Repository from "../../repository/Repository";
    // import { showValidationError } from "../../util/common";
    export default {
      props: {
        rails_errors: {}
        // organization_objects: {},
        // associate_objects: {}
      },
      data() {
        return {
        //   organizations: [],
        //   associations: [],
        //   selectedUniversity: "",
        //   selectedAssociate: "",
          // railsErrors: {}
        //   errorMessageUniversity: "error",
        //   errorMessageAssociate: "error",
        //   triggerSubmit: false
          // showValidationError: showValidationError,
        };
      }
    //   async created() {
    //     this.organizations = JSON.parse(this.organization_objects);
    //     this.associations = JSON.parse(this.associate_objects);
    //     this.railsErrors = JSON.parse(this.rails_errors);
    //   },
    //   methods: {
    //     getUniversityValue: function (event) {
    //       var key = event.target.value
    //       console.log(key);
    //     },
    //     getAssociateValue: function (event) {
    //       var key = event.target.value
    //       console.log(key);
    //     },
    //     submitTemporaryUser() {
    //       this.triggerSubmit = true;
    //       // this.errorMessageUniversity = (this.selectedUniversity.value = "" || "-1");
    //       console.log(this.selectedUniversity);
    //       // this.errorMessageAssociate = this.showValidationError(this.selectedAssociate = "" || "-1") ? 'Error' : 'Success';
    //     }
    //   }
    };
</script> -->
h1.title
  | hello
