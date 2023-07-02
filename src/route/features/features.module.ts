import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BannerModule } from './banner/banner.module';
import { CourseModule } from './course/course.module';
import { CategoryModule } from './category/category.module';
import { ChapterModule } from './chapter/chapter.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [
    UserModule,
    BannerModule,
    CourseModule,
    CategoryModule,
    ChapterModule,
    LectureModule,
  ],
})
export class FeaturesModule {}
