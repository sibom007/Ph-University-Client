import { baseApi } from "../../api/baseApi";

const AcademicSemester = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getsemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetsemesterQuery } = AcademicSemester;

export default AcademicSemester;
