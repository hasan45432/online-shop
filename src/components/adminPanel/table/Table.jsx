import React from "react";

export default function Table() {
  return (
    <>
      <div className=" flex  items-center justify-end mt-16 lg:p-4  ">
        <table className=" table overflow-x-auto w-[100%]">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>دسته بندی</th>
              <th> ویرایش</th>
              <th> حذف</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>تی شرت </td>
              <td>300000</td>
              <td>لباس</td>
              <td>
                <button>حذف</button>
              </td>
              <td>
                <button>ویرایش</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td> شلوار </td>
              <td> 20000 </td>
              <td>شلوار</td>
              <td>
                <button>حذف</button>
              </td>
              <td>
                <button>ویرایش</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td> شلوار </td>
              <td> 20000 </td>
              <td>شلوار</td>
              <td>
                <button>حذف</button>
              </td>
              <td>
                <button>ویرایش</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td> شلوار </td>
              <td> 20000 </td>
              <td>شلوار</td>
              <td>
                <button>حذف</button>
              </td>
              <td>
                <button>ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
