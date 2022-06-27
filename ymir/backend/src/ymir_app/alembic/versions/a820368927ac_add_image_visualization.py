"""add image visualization

Revision ID: a820368927ac
Revises: 501414124392
Create Date: 2022-06-21 10:53:08.218745

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a820368927ac'
down_revision = '501414124392'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "visualization",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("tid", sa.String(length=100), nullable=False),
        sa.Column("is_deleted", sa.Boolean(), nullable=False),
        sa.Column("create_datetime", sa.DateTime(), nullable=False),
        sa.Column("update_datetime", sa.DateTime(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_visualization_user"), "visualization", ["user_id"], unique=False)
    op.create_index(op.f("ix_visualization_tid"), "visualization", ["tid"], unique=False)

    op.create_table(
        "task_visual_relationship",
        sa.Column("task_id", sa.Integer(), nullable=False),
        sa.Column("visualization_id", sa.Integer(), nullable=False),
        sa.PrimaryKeyConstraint("task_id", "visualization_id"),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f("ix_visualization_user"), table_name="visualization")
    op.drop_index(op.f("ix_visualization_tid"), table_name="visualization")
    op.drop_table("visualization")
    op.drop_table("task_visual_relationship")
    # ### end Alembic commands ###
