import { http } from "./HttpService";

export default {
  methods: {
    getCategories: http().get("api/v1/categories"),
    getMeetings: http().get("api/v1/meetups")
  }
}