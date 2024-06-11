import React from "react";

export default function Table() {
  return (
    <>
      <div className=" flex  items-center justify-end 2xl:pl-[100px] xl:pl-[110px] lg:pl-[20px] mt-4">
        <table className=" table overflow-x-auto lg:w-[70%] xl:w-[75%] 2xl:w-[80%]">
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
