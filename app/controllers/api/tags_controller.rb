class Api::TagsController < ApplicationController
    before_action :require_logged_in, only: [:create, :index, :update, :destroy, :show]


    def index
        @tags = @current_user.tags
        if @tags
            render :index
        else
            render json: { error: "no tags found"}
        end

    end

    def show
        @tag = Tag.find_by(id: params[:id])
        if @tag
            render :show
        else
            render json: { error: "no tag found" }
        end
    end

    def create
        @tag = Tag.new(tag_params)
        
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update
        @tag = Tag.find_by(id: params[:id])
        
        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find_by(id: params[:id])

        if @tag.destroy
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    private
    def tag_params
        params.require(:tag).permit(:title, :user_id)
    end
end
