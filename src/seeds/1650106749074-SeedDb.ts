import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1650106749074 implements MigrationInterface {
  name = 'SeedDb1650106749074';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password is 123456
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('Yaroslav', 'test@gmail.com', '$2b$10$CJ0yraOomyYTmIn5iJoTheiMshHBo6TCeEbHUC3SlacaOOTSprHXW')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'coffee,dragons', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article description', 'second article body', 'coffee,dragons', 1)`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
