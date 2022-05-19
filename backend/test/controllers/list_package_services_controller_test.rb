require "test_helper"

class ListPackageServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_package_service = list_package_services(:one)
  end

  test "should get index" do
    get list_package_services_url, as: :json
    assert_response :success
  end

  test "should create list_package_service" do
    assert_difference("ListPackageService.count") do
      post list_package_services_url, params: { list_package_service: { packages_id: @list_package_service.packages_id, services_id: @list_package_service.services_id, value: @list_package_service.value } }, as: :json
    end

    assert_response :created
  end

  test "should show list_package_service" do
    get list_package_service_url(@list_package_service), as: :json
    assert_response :success
  end

  test "should update list_package_service" do
    patch list_package_service_url(@list_package_service), params: { list_package_service: { packages_id: @list_package_service.packages_id, services_id: @list_package_service.services_id, value: @list_package_service.value } }, as: :json
    assert_response :success
  end

  test "should destroy list_package_service" do
    assert_difference("ListPackageService.count", -1) do
      delete list_package_service_url(@list_package_service), as: :json
    end

    assert_response :no_content
  end
end
