/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LandingPageService } from "../landingPage.service";
import { LandingPageCreateInput } from "./LandingPageCreateInput";
import { LandingPage } from "./LandingPage";
import { LandingPageFindManyArgs } from "./LandingPageFindManyArgs";
import { LandingPageWhereUniqueInput } from "./LandingPageWhereUniqueInput";
import { LandingPageUpdateInput } from "./LandingPageUpdateInput";
import { CourseFindManyArgs } from "../../course/base/CourseFindManyArgs";
import { Course } from "../../course/base/Course";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";

export class LandingPageControllerBase {
  constructor(protected readonly service: LandingPageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LandingPage })
  async createLandingPage(
    @common.Body() data: LandingPageCreateInput
  ): Promise<LandingPage> {
    return await this.service.createLandingPage({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LandingPage] })
  @ApiNestedQuery(LandingPageFindManyArgs)
  async landingPages(@common.Req() request: Request): Promise<LandingPage[]> {
    const args = plainToClass(LandingPageFindManyArgs, request.query);
    return this.service.landingPages({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LandingPage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async landingPage(
    @common.Param() params: LandingPageWhereUniqueInput
  ): Promise<LandingPage | null> {
    const result = await this.service.landingPage({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LandingPage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLandingPage(
    @common.Param() params: LandingPageWhereUniqueInput,
    @common.Body() data: LandingPageUpdateInput
  ): Promise<LandingPage | null> {
    try {
      return await this.service.updateLandingPage({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LandingPage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLandingPage(
    @common.Param() params: LandingPageWhereUniqueInput
  ): Promise<LandingPage | null> {
    try {
      return await this.service.deleteLandingPage({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/courses")
  @ApiNestedQuery(CourseFindManyArgs)
  async findCourses(
    @common.Req() request: Request,
    @common.Param() params: LandingPageWhereUniqueInput
  ): Promise<Course[]> {
    const query = plainToClass(CourseFindManyArgs, request.query);
    const results = await this.service.findCourses(params.id, {
      ...query,
      select: {
        createdAt: true,
        createdBy: true,
        description: true,
        id: true,

        landingPage: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/courses")
  async connectCourses(
    @common.Param() params: LandingPageWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        connect: body,
      },
    };
    await this.service.updateLandingPage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/courses")
  async updateCourses(
    @common.Param() params: LandingPageWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        set: body,
      },
    };
    await this.service.updateLandingPage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/courses")
  async disconnectCourses(
    @common.Param() params: LandingPageWhereUniqueInput,
    @common.Body() body: CourseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      courses: {
        disconnect: body,
      },
    };
    await this.service.updateLandingPage({
      where: params,
      data,
      select: { id: true },
    });
  }
}
