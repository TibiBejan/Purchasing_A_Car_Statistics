import { Car } from '@api/v1/models';
import { getCarsWithTrim } from '@api/v1/repositories/car.repository';

export const getAll = async(include: string = ""): Promise<Car[]> => {
    let response;

    console.log(include)

    response = await getCarsWithTrim(include);

    if (response instanceof Error) {
        throw new Error(response.message);
    }

    return response;
}
