import { createRoute } from 'honox/factory'
import type { Employee } from '../../db'
import { getFormDataValue, getFormDataNumber } from '../../utils/formData'
import { createEmployee } from '../../db'

export const POST = createRoute(async (c) => {
  try {
    const formData = await c.req.formData();
    console.log(formData)
    const imageFile = formData.get('image_file');
    let imageUrl = '';

    if (imageFile instanceof File) { 
      const key = `${new Date().getTime()}-${imageFile.name}`;
      const fileBuffer = await imageFile.arrayBuffer();

      await c.env.MY_BUCKET.put(key, fileBuffer, {
        httpMetadata: {
          contentType: imageFile.type || 'application/octet-stream',
        },
      });
      console.log(`File uploaded successfully: ${key}`);
      imageUrl = `https://pub-8d936184779047cc96686a631f318fce.r2.dev/${key}`;
    }

    const employeeData: Employee = {
      employee_id: getFormDataValue(formData, 'employee_id'),
      name: getFormDataValue(formData, 'name'),
      position: getFormDataValue(formData, 'position'),
      image_url: imageUrl,
      join_date: getFormDataValue(formData, 'join_date'),
      department_id: getFormDataNumber(formData, 'department_id'),
      location_id: getFormDataNumber(formData, 'location_id'),
      location_name: '',
      department_name: ''
    };
    
    console.log(employeeData);
  
    await createEmployee(c.env.DB, employeeData);

    return c.redirect('/', 303);
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response('Error processing your request', { status: 500 });
  }
});


