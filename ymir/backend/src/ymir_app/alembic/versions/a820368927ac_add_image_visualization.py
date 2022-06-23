"""add image visualization

Revision ID: a820368927ac
Revises: e2fe87f35cf4
Create Date: 2022-06-21 10:53:08.218745

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a820368927ac'
down_revision = 'e2fe87f35cf4'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("task", schema=None) as batch_op:
        batch_op.add_column(sa.Column("visualization_id", sa.Integer(), nullable=True))
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
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("task", schema=None) as batch_op:
        batch_op.drop_column("visualization_id")
    op.drop_index(op.f("ix_visualization_user"), table_name="visualization")
    op.drop_index(op.f("ix_visualization_tid"), table_name="visualization")
    op.drop_table("visualization")
    # ### end Alembic commands ###
