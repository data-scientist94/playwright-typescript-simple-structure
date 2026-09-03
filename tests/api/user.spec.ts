import { UserApi } from '@api/UserApi';
import { test, expect } from '@fixtures/apiFixtures'; 
import { ReflectionUtils } from '@utils/ReflectionUtils';
import { UserDto } from '@utils/UserDto';

test.describe('Batch User Creation with Reflection Utility', () => {
  test('should create 10 users and map responses using reflection', async ({ userApi }) => {
    // Generate 10 dynamic user payloads
    const usersToCreate = Array.from({ length: 10 }, (_, index) => ({
      name: `User_${index + 1}`,
      job: index % 2 === 0 ? 'Leader' : 'QA Engineer',
    }));

    for (const payload of usersToCreate) {
      const response = await userApi.createUser(payload);
      expect(response.status()).toBe(201);

      const rawJson = await response.json();

      // Use the reflection utility to map JSON -> UserDto class instance
      const mappedUser = ReflectionUtils.mapToClass(UserDto, rawJson);

      // Assertions on the reflection-mapped class instance
      expect(mappedUser).toBeInstanceOf(UserDto);
      expect(mappedUser.name).toBe(payload.name);
      expect(mappedUser.job).toBe(payload.job);
      expect(mappedUser.id).toBeDefined();
      expect(mappedUser.createdAt).toBeDefined();
    }
  });
});

test.describe('User Microservice API Suite', () => {
  test('should create a new user successfully', async ({ userApi }) => {
    const response = await userApi.createUser({ name: 'John Doe' });

    expect(response.status()).toBe(201);
  });

  test('should fetch user details successfully by ID', async ({ userApi }) => {
    const response = await userApi.getUserById(2);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.first_name).toBe('Janet');
  });


});