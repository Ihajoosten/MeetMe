import Vue from 'vue'
import moment from 'moment'

const filters = () => {
    Vue.filter('capitalize', function(value) {
        if (value && typeof value === 'string') {
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      
        return '';
      });
      
      Vue.filter('fromNow', function(value) {
        if (!value) return '';
      
        return moment(value).fromNow();
      });
      
      Vue.filter('date', value => {
        if (!value) {
          return '';
        }
      
        return moment(value).format('DD MMM, YYYY');
      });
      
      Vue.filter('day', value => {
        if (!value) {
          return '';
        }
      
        return moment(value).format('DD');
      });
      
      Vue.filter('month', value => {
        if (!value) {
          return '';
        }
      
        return moment(value).format('MMMM');
      });
}

export default filters